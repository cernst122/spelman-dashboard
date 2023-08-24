import { describe, expect, test } from '@jest/globals';
import { Query_nsf23313_2_1_values } from './values'
import { Query } from '../../queries/query'

const data: Query_nsf23313_2_1_values = new Query_nsf23313_2_1_values()

const male = new Query('gender', 'Male')
const hispanic = new Query('ethnicity', 'HispanicOrLatino')
const masters_degree = new Query('education', 'EducationalAttainmentMastersDegree')
const doc_degree = new Query('education', 'EducationalAttainmentDoctorateDegree')
const postdoc = new Query('occupation', 'PostDoctoralAppointeeOccupation')
const nonfaculty = new Query('occupation', 'NonFacultyResearcherOccupation')
const black = new Query('race', 'Black')
const unknown = new Query('race', 'UnknownRace')
const citizen = new Query('citizenship', 'Citizen')
const visa = new Query('citizenship', 'VisaHolder')

describe('nsf23313_2_1 query single dimenions that are not reported alone', () => {
    test('query single category gender', () => {
        const out = data.query(male)
        expect(out.results).toEqual([
            "Count_Person_EducationalAttainmentGraduateSchoolOrPostGraduate_Male"
        ])
    })

    test('query single category ethnicity', () => {
        const out = data.query(hispanic)
        expect(out.results).toEqual([
            "Count_Person_Citizen_EducationalAttainmentGraduateSchoolOrPostGraduate_HispanicOrLatino"
        ])
    })

    test('query single category race', () => {
        const out = data.query(black)
        expect(out.results).toEqual([
            "Count_Person_Citizen_EducationalAttainmentGraduateSchoolOrPostGraduate_NotHispanicOrLatino_Black"
        ])
    })

    test('query nonfaculty', () => {
        const out = data.query(nonfaculty)
        expect(out.results).toEqual([])
    })
})
describe('nsf23313_2_1 query single dimension that is expected to return a value', () => {
    test('query single category masters degree', () => {
        const out = data.query(masters_degree)
        expect(out.results).toEqual([
            'Count_Person_EducationalAttainmentMastersDegree',
        ])
    })

    test('query citizens', () => {
        const out = data.query(citizen)
        expect(out.results).toEqual([
            'Count_Person_Citizen_EducationalAttainmentGraduateSchoolOrPostGraduate',
        ])
    })

    test('query visa holders', () => {
        const out = data.query(visa)
        expect(out.results).toEqual([
            'Count_Person_VisaHolder_EducationalAttainmentGraduateSchoolOrPostGraduate_UnknownEthnicity',
        ])
    })

    test('query unknown race', () => {
        const out = data.query(unknown)
        expect(out.results).toEqual([
            'Count_Person_Citizen_EducationalAttainmentGraduateSchoolOrPostGraduate_UnknownEthnicity_UnknownRace',
        ])
    })
})

describe('nsf23313_2_1 query 2 categories', () => {
    test('query masters degree hispanic', () => {
        const out = data.query(masters_degree, hispanic)
        expect(out.results).toEqual([
            'Count_Person_Citizen_EducationalAttainmentMastersDegree_HispanicOrLatino',
        ])
    })

    test('query postdoc appointee citizens', () => {
        const out = data.query(citizen,postdoc)
        expect(out.results).toEqual([])
    })

    test('query citizens with masters ', () => {
        const out = data.query(citizen, masters_degree)
        expect(out.results).toEqual(["Count_Person_Citizen_EducationalAttainmentMastersDegree"])
    })

    test('query visa holding doctorate degrees', () => {
        const out = data.query(visa, doc_degree)
        expect(out.results).toEqual(["Count_Person_VisaHolder_EducationalAttainmentDoctorateDegree_UnknownEthnicity"])
    })
})