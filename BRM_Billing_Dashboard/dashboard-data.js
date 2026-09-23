window.BILLING_DATA={
  "months": [
    {
      "month": "JUN 26",
      "rows": [
        {
          "group": "Pre billing Preparation",
          "process": "Pin_deferred_act",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees cycle_fees",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees purchase",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees cancel",
          "duration": 0.002,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Billing Execution",
          "process": "./vf_pin_bill_make_bill -verbose -billinfo_type subscription",
          "duration": 3.554,
          "errors": 176,
          "errorType": "Billing Error"
        },
        {
          "group": "Billing Execution",
          "process": "./vf_pin_bill_make_bill -verbose -billinfo_type account",
          "duration": 0.412,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Post-Billing Updates",
          "process": "pin_cycle_forward",
          "duration": 0.007,
          "errors": 7,
          "errorType": "Billing Error"
        },
        {
          "group": "Post-Billing Updates",
          "process": "pin_deferred_act -verbose",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Subs Invoicing",
          "process": "udmt.pl invoice_number",
          "duration": 0.056,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Subs Invoicing",
          "process": "vf_pin_inv_accts.pl -verbose -detail -subscription_level",
          "duration": 2.295,
          "errors": 523,
          "errorType": "Invoicing Error"
        },
        {
          "group": "Fiscalization",
          "process": "./vf_pin_gen_fiscal_data -verbose -all all_customers",
          "duration": 1.946,
          "errors": 887,
          "errorType": "Fiscal Error"
        },
        {
          "group": "Fiscalization",
          "process": "./udmt.pl post_bill_fiscal_correction",
          "duration": 1.317,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "1up Team Process",
          "process": "Fiscalization Check",
          "duration": 16.846,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Account Level Invoicing",
          "process": "Account Level Invoicing",
          "duration": 9.254,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Xml Exporting",
          "process": "Xml exporting for FIX line accounts",
          "duration": 3.565,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Xml Exporting",
          "process": "Xml exporting for mobile",
          "duration": 3.565,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Darwin Process",
          "process": "Darwin\u00a0reports \u2013 for fix and Mobile",
          "duration": null,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "VAT Docgen",
          "process": "Fiscal VAT PDF",
          "duration": 14.333,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Non-Tax Docgen",
          "process": "Fiscal PDF",
          "duration": 12.0,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Non-Tax Docgen",
          "process": "Non-Fiscal VAT PDF (Dummy)",
          "duration": 0.0,
          "errors": 0,
          "errorType": "None"
        }
      ],
      "categoryTotals": {
        "Pre billing Preparation": 0.006,
        "Billing Execution": 3.966,
        "Post-Billing Updates": 0.009,
        "Subs Invoicing": 2.351,
        "Fiscalization": 4.266,
        "1up Team Process": 16.846,
        "Account Level Invoicing": 41.621,
        "Xml Exporting": 3.565,
        "VAT Docgen": 14.333,
        "Non-Tax Docgen": 12.0
      },
      "categoryOccurrences": {
        "Pre billing Preparation": 4,
        "Billing Execution": 2,
        "Post-Billing Updates": 2,
        "Subs Invoicing": 2,
        "Fiscalization": 2,
        "1up Team Process": 1,
        "Account Level Invoicing": 1,
        "Xml Exporting": 2,
        "VAT Docgen": 1,
        "Non-Tax Docgen": 2
      },
      "stageTotals": {
        "Billing": 3.981,
        "Invoicing": 43.972,
        "Fiscal": 4.266,
        "1up Team Process": 16.846,
        "Xml Exporting": 3.565,
        "DocGen": 26.333
      },
      "errors": {
        "Billing Error": 183,
        "Invoicing Error": 523,
        "Fiscal Error": 887
      },
      "endToEnd": 98.963,
      "quality": {
        "sourceRows": 27,
        "usableRows": 20,
        "invalidDurations": 0,
        "durationMismatches": 0
      }
    },
    {
      "month": "JUL 26",
      "rows": [
        {
          "group": "Pre billing Preparation",
          "process": "Pin_deferred_act",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees cycle_fees",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees purchase",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees cancel",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Billing Execution",
          "process": "./vf_pin_bill_make_bill -verbose -billinfo_type subscription",
          "duration": 2.911,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Billing Execution",
          "process": "./vf_pin_bill_make_bill -verbose -billinfo_type account",
          "duration": 0.427,
          "errors": 845,
          "errorType": "Billing Error"
        },
        {
          "group": "Post-Billing Updates",
          "process": "pin_cycle_forward",
          "duration": 0.303,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Post-Billing Updates",
          "process": "pin_deferred_act -verbose",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Subs Invoicing",
          "process": "udmt.pl invoice_number",
          "duration": 0.069,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Subs Invoicing",
          "process": "vf_pin_inv_accts.pl -verbose -detail -subscription_level",
          "duration": 2.456,
          "errors": 587,
          "errorType": "Invoicing Error"
        },
        {
          "group": "Fiscalization",
          "process": "./vf_pin_gen_fiscal_data -verbose -all all_customers",
          "duration": 0.582,
          "errors": 650,
          "errorType": "Fiscal Error"
        },
        {
          "group": "Fiscalization",
          "process": "./udmt.pl post_bill_fiscal_correction",
          "duration": 0.681,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "1up Team Process",
          "process": "Fiscalization Check",
          "duration": 24.05,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Account Level Invoicing",
          "process": "Account Level Invoicing",
          "duration": 8.995,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Xml Exporting",
          "process": "Xml exporting for FIX line accounts",
          "duration": 0.467,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Xml Exporting",
          "process": "Xml exporting for mobile",
          "duration": 3.667,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Darwin Process",
          "process": "Darwin\u00a0reports \u2013 for fix and Mobile",
          "duration": null,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "VAT Docgen",
          "process": "Fiscal VAT PDF",
          "duration": 13.833,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Non-Tax Docgen",
          "process": "Fiscal PDF",
          "duration": 7.117,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Non-Tax Docgen",
          "process": "Non-Fiscal VAT PDF (Dummy)",
          "duration": 8.133,
          "errors": 0,
          "errorType": "None"
        }
      ],
      "categoryTotals": {
        "Pre billing Preparation": 0.005,
        "Billing Execution": 3.338,
        "Post-Billing Updates": 0.304,
        "Subs Invoicing": 2.525,
        "Fiscalization": 1.262,
        "1up Team Process": 24.05,
        "Account Level Invoicing": 25.817,
        "Xml Exporting": 4.133,
        "VAT Docgen": 13.833,
        "Non-Tax Docgen": 66.3
      },
      "categoryOccurrences": {
        "Pre billing Preparation": 4,
        "Billing Execution": 2,
        "Post-Billing Updates": 2,
        "Subs Invoicing": 2,
        "Fiscalization": 2,
        "1up Team Process": 1,
        "Account Level Invoicing": 1,
        "Xml Exporting": 2,
        "VAT Docgen": 1,
        "Non-Tax Docgen": 2
      },
      "stageTotals": {
        "Billing": 3.647,
        "Invoicing": 28.342,
        "Fiscal": 1.262,
        "1up Team Process": 24.05,
        "Xml Exporting": 4.133,
        "DocGen": 80.133
      },
      "errors": {
        "Billing Error": 845,
        "Invoicing Error": 587,
        "Fiscal Error": 650
      },
      "endToEnd": 141.567,
      "quality": {
        "sourceRows": 28,
        "usableRows": 20,
        "invalidDurations": 0,
        "durationMismatches": 0
      }
    },
    {
      "month": "AUG 26",
      "rows": [
        {
          "group": "Pre billing Preparation",
          "process": "Pin_deferred_act",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees cycle_fees",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees purchase",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Pre billing Preparation",
          "process": "Pin_cycle_fees cancel",
          "duration": 0.002,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Billing Execution",
          "process": "./vf_pin_bill_make_bill -verbose -billinfo_type subscription",
          "duration": 3.995,
          "errors": 1,
          "errorType": "Billing Error"
        },
        {
          "group": "Billing Execution",
          "process": "./vf_pin_bill_make_bill -verbose -billinfo_type account",
          "duration": 0.419,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Post-Billing Updates",
          "process": "pin_cycle_forward",
          "duration": 1.128,
          "errors": 1,
          "errorType": "Billing Error"
        },
        {
          "group": "Post-Billing Updates",
          "process": "pin_deferred_act -verbose",
          "duration": 0.001,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Subs Invoicing",
          "process": "udmt.pl invoice_number",
          "duration": 0.054,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Subs Invoicing",
          "process": "vf_pin_inv_accts.pl -verbose -detail -subscription_level",
          "duration": 2.437,
          "errors": 308,
          "errorType": "Invoicing Error"
        },
        {
          "group": "Fiscalization",
          "process": "./vf_pin_gen_fiscal_data -verbose -all all_customers",
          "duration": 0.413,
          "errors": 642,
          "errorType": "Fiscal Error"
        },
        {
          "group": "Fiscalization",
          "process": "./udmt.pl post_bill_fiscal_correction",
          "duration": 1.008,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "1up Team Process",
          "process": "Fiscalization Check",
          "duration": 21.05,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Account Level Invoicing",
          "process": "Account Level Invoicing",
          "duration": 3.334,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Xml Exporting",
          "process": "Xml exporting for FIX line accounts",
          "duration": 0.467,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Xml Exporting",
          "process": "Xml exporting for mobile",
          "duration": 3.667,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Darwin Process",
          "process": "Darwin\u00a0reports \u2013 for fix and Mobile",
          "duration": null,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "VAT Docgen",
          "process": "Fiscal VAT PDF",
          "duration": 13.833,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Non-Tax Docgen",
          "process": "Fiscal PDF",
          "duration": 23.732,
          "errors": 0,
          "errorType": "None"
        },
        {
          "group": "Non-Tax Docgen",
          "process": "Non-Fiscal VAT PDF (Dummy)",
          "duration": 8.133,
          "errors": 0,
          "errorType": "None"
        }
      ],
      "categoryTotals": {
        "Pre billing Preparation": 0.006,
        "Billing Execution": 4.414,
        "Post-Billing Updates": 1.129,
        "Subs Invoicing": 2.491,
        "Fiscalization": 1.421,
        "1up Team Process": 21.05,
        "Account Level Invoicing": 23.732,
        "Xml Exporting": 4.133,
        "VAT Docgen": 13.833,
        "Non-Tax Docgen": 31.865
      },
      "categoryOccurrences": {
        "Pre billing Preparation": 4,
        "Billing Execution": 2,
        "Post-Billing Updates": 2,
        "Subs Invoicing": 2,
        "Fiscalization": 2,
        "1up Team Process": 1,
        "Account Level Invoicing": 1,
        "Xml Exporting": 2,
        "VAT Docgen": 1,
        "Non-Tax Docgen": 2
      },
      "stageTotals": {
        "Billing": 5.549,
        "Invoicing": 26.223,
        "Fiscal": 1.421,
        "1up Team Process": 21.05,
        "Xml Exporting": 4.133,
        "DocGen": 45.698
      },
      "errors": {
        "Billing Error": 2,
        "Invoicing Error": 308,
        "Fiscal Error": 642
      },
      "endToEnd": 104.074,
      "quality": {
        "sourceRows": 30,
        "usableRows": 20,
        "invalidDurations": 0,
        "durationMismatches": 1
      }
    }
  ],
  "stageOrder": [
    "Billing",
    "Invoicing",
    "Fiscal",
    "1up Team Process",
    "Xml Exporting",
    "DocGen"
  ],
  "detailOrder": [
    "Pre billing Preparation",
    "Billing Execution",
    "Post-Billing Updates",
    "Subs Invoicing",
    "Fiscalization",
    "1up Team Process",
    "Account Level Invoicing",
    "Xml Exporting",
    "VAT Docgen",
    "Non-Tax Docgen"
  ]
};
