# Subpages copy deck (FAQ, Support, Privacy, Terms)

Same rules as the homepage deck: edit the text under each label,
leave the labels, write REMOVE under a label to delete that block.


# ═══ FAQ page ═══

**Title**
Frequently asked questions

**Updated line**
HybridEdge beta · Updated 29 July 2026

**Summary box**
The short version: HybridEdge measures what powering your plug-in hybrid really costs, petrol and electricity together. No account, no ads, nothing leaves your phone\*, and you don't need any hardware to use it.

**Summary footnote** (small grey text under the summary box)
\*Unless you choose it: household sync into your own iCloud if you set it up, anonymous calibration data if you agree during setup, and a diagnostic report if you send one. Details in the privacy question below.


## What is HybridEdge?

**Paragraph 1**
An iPhone app that answers the question the trip computer won't: what does each drive actually cost? Petrol and electricity together, per trip and per 100 km, with the split between them shown honestly, not averaged into a number nobody can confirm. The rule it's built around: every figure is measured from the car, or it isn't shown.


## Which cars does it work with?

**Paragraph 1**
HybridEdge was developed and validated on the BYD Denza B5, with its measurements checked against the dash over hundreds of kilometres (battery state agrees within about 0.3%). Testing now includes the Denza B8 and BYD Shark 6, with more PHEVs to follow soon. The app's database covers 80+ plug-in hybrids sold in Australia, and any PHEV can use manual logging today. Full automatic readings for new models arrive through in-app calibration: the app learns your car as you drive, and tells you honestly when a value for your model is verified and when it isn't.


## Do I need to buy anything?

**Paragraph 1**
No. Every core feature works with manual entry: tap Start trip, type the odometer, fuel, and battery figures off your dash, then end the trip the same way. All costs, the logbook, and insights work from that. If you want the car to fill the numbers in itself, a ~$50 Bluetooth OBD-II reader (we test with the Veepeak OBDCheck BLE+) plugs into the port under the steering wheel, and the app records battery, fuel, odometer, and speed continuously while you drive.


## Which OBD readers are compatible?

**Paragraph 1**
The short rule: HybridEdge works with Bluetooth Low Energy readers that speak the ELM327 command set. If a reader turns out not to be compatible, the app says so clearly on screen, and manual entry always works regardless. Here's the current state of the list:

**Table row: Veepeak OBDCheck BLE+**
Veepeak OBDCheck BLE+ ~$50 | Confirmed | The tested and recommended reader, validated over hundreds of kilometres of driving.

**Table row: Veepeak OBDCheck BLE**
Veepeak OBDCheck BLE ~$40 | Probably | The tested reader's near-identical sibling: same hardware and radio, older ELM327 command set that still covers everything HybridEdge uses.

**Table row: vLinker MC+**
vLinker MC+ ~$60 | Probably | Meets the spec on paper. Not yet verified in the field.

**Table row: Vgate iCar Pro Bluetooth 4.0**
Vgate iCar Pro Bluetooth 4.0 ~$35 | Probably | Meets the spec on paper. Not yet verified in the field.

**Table row: OBDLink CX**
OBDLink CX ~$130 | Probably | Premium unit, meets the spec on paper. Not yet verified in the field.

**Table row: PLX Kiwi 3**
PLX Kiwi 3 ~$150 | Probably | Premium unit, meets the spec on paper. Not yet verified in the field.

**Table row: Other BLE ELM327 readers**
Other BLE ELM327 readers | Probably | Reading the listing: "Android only", "Symbian", or "PPC" means classic Bluetooth, which iPhones cannot use at all. "iOS", "iPhone", "BLE", or "Bluetooth 4.0/5.0" means the right radio, and the reader will connect. What no listing tells you is the firmware inside: genuine ELM327 firmware went 1.4, then 2.0 to 2.3, and readers reporting "v1.5" are clones. Some v1.5 clones work; we have field-tested one that connects fine but cannot read hybrid data at all. The app shows your reader's firmware in Settings, so you can check what you actually received.

**Table row: Generic "ELM327 mini" Bluetooth OBD2 (Amazon)**
Generic "ELM327 mini" Bluetooth OBD2 (Amazon) ~$11 | Mixed | A firmware lottery: two units from the same listing shipped different chips. One (ELM327 v2.1 firmware) works fully, field-confirmed on a BYD Shark 6. Another (v1.5 clone firmware) connects and reads speed and odometer but returns no battery or fuel data at all, field-tested on a Denza B5. If your unit reports v1.5, expect missing data.

**Table row: OBDLink MX+**
OBDLink MX+ ~$180 | Not compatible | A premium adapter, but it uses classic Bluetooth with Apple's accessory certification, a different technology from the Bluetooth Low Energy that HybridEdge speaks. Despite the "works with iPhone" label, it won't connect to this app.

**Table row: Jaycar Response PP2145**
Jaycar Response PP2145 ~$109 | Not compatible | Tester-reported and confirmed against the maker's manual. Its ELM327 data runs over classic Bluetooth (Android only); the Bluetooth LE side speaks a proprietary protocol only the maker's own iPhone app can use. HybridEdge's compatibility check correctly refuses it.

**Table row: Any Wi-Fi reader**
Any Wi-Fi reader | Not compatible | HybridEdge connects over Bluetooth only.

**Table row: Any classic Bluetooth reader**
Any classic Bluetooth reader | Not compatible | Most bargain "Bluetooth ELM327" dongles are classic Bluetooth, which iPhone apps cannot use. BLE only.

**Paragraph 2**
Help grow the Confirmed list: when a reader connects, the app records which model and firmware it identified as. Drive once with your reader, then send a report from Settings > Diagnostics, and your reader can be added to the table.


## Where is the OBD port, and can a reader harm my car?

**Paragraph 1**
Look under the dash above the pedals, around the steering column; the socket faces the floor. It's a 16-pin trapezoid about the size of a matchbox, and some cars hide it behind a small flip-down cover. The reader stays plugged in permanently.

**Paragraph 2**
The port is designed for exactly this kind of accessory. HybridEdge only asks read-only questions the same way a mechanic's scan tool does (battery level, fuel level, odometer, and speed). It cannot change settings, clear fault codes, or modify your car in any way. That said, OBD readers are third-party hardware, so if you're unsure how an accessory sits with your warranty or insurance, ask your dealer before plugging one in.


## What about my data and privacy?

**Paragraph 1**
There's no account and no sign-up because there's nothing to sign up to. There are no ads either, and there never will be. Your trips, costs, and locations are stored on your phone, and nothing leaves it unless you choose to send it. On its own the app only downloads public reference data: the vehicle-specification list and the Australian electricity-plan list, neither containing anything about you.

**Paragraph 2**
Three things are your choice. Household sync copies a car's trips into your own iCloud for the phones you invite, and Delete household data on its card removes that copy. Calibration sharing, asked during setup, shares anonymous calibration readings while your model is being calibrated: the car's raw value, the dash figure you typed, and your car model, never your trips, location or identity. On cars that report their battery's power, it also shares two numbers from each charge the app watches, so other owners of your model get measured regen sooner. The readings are deleted once your model's calibration is published, and sharing stops by itself at that point. It's preselected because the whole fleet benefits, and one tap turns it off. And a diagnostic report leaves your phone only if you choose to send one when something looks wrong. The full detail is in the privacy policy.


## What iPhone do I need?

**Paragraph 1**
Any iPhone from the iPhone 11 or iPhone SE (2nd generation) onward, running iOS 26.4 or later. If your phone has taken its updates in the last year, you're fine.


## What do the permissions do?

**Paragraph 1**
Bluetooth talks to the optional OBD reader. Without one, the app simply stays in manual mode. Location is optional and records trip routes and start/end place names for your logbook, stored on-device. Notifications power the trip prompts: "log a new trip?" when the car starts, and end-trip options when you switch off.


## Why does fuel show as a percentage?

**Paragraph 1**
The dash's kilometre range is the car's own adaptive guess and can't be matched by any app honestly. The tank percentage is what the car actually reports, so that's what HybridEdge uses, everywhere.


## Why is the app dark?

**Paragraph 1**
The beta ships dark-only; it's designed around in-car readability. A proper light theme is on the roadmap.


## How do I join the beta?

**Paragraph 1**
Testing runs through Apple's TestFlight. Invites are going out in waves, so ask in the HybridEdge Facebook page or email support@hybridedge.com.au. It's free during the beta.


## I found a bug. What's the best way to report it?

**Paragraph 1**
Three ways, best first: take a screenshot inside the app and use TestFlight's built-in feedback (it attaches useful diagnostics automatically); send a report from Settings → Diagnostics (coordinates are rounded and place names masked by default, and you see the contents before sending); or email support@hybridedge.com.au. Every report gets read.


## When will it be on the App Store?

**Paragraph 1**
When the beta proves it's ready. Accuracy comes first: the app ships when its numbers can be trusted, not before.


## Contact

**Paragraph 1**
Anything else: support@hybridedge.com.au


# ═══ Support page ═══

**Title**
Support

**Paragraph 1**
HybridEdge: real running costs for your plug-in hybrid.


## Common questions

**Question**
Do I need an OBD reader?

**Answer**
No. You can log trips by typing three numbers from your dashboard at the start and end. A Bluetooth OBD-II reader (about $50; we test with the Veepeak OBDCheck BLE+) makes logging near-automatic: the app reads battery, fuel, and odometer itself, and prompts you at ignition on and off.

**Question**
Where is the OBD port in my car?

**Answer**
Look up under the dash above the pedals, around the steering column; the socket faces the floor. It's a 16-pin trapezoid about the size of a matchbox; some cars hide it behind a small flip-down cover. The reader stays plugged in permanently.

**Question**
Can the reader damage my car or change settings?

**Answer**
The app only asks the standard read-only questions a mechanic's scan tool asks. It cannot alter settings, clear codes, or modify your car.

**Question**
Where is my data stored?

**Answer**
Your driving history lives on your phone, and in your own iCloud only if you set up household sync. No accounts and no analytics. The only other things that can leave are anonymous calibration readings, charge measurements included (your choice, and they stop once your model is calibrated), and a diagnostic report if you send one. See the privacy policy.

**Question**
My car isn't in the vehicle list.

**Answer**
The list updates over the air, so new PHEVs appear without an app update shortly after they hit the roads. Send an email to support@hybridedge.com.au if you can't find yours and we'll add it.  Meanwhile, enter your battery (usable kWh) and tank size from the owner's manual; the app labels unverified specs honestly until they're confirmed. Email us your make and model and we'll add it to the database.

**Question**
Something doesn't match my dash.

**Answer**
That's exactly what we want to hear about. In the app: Settings → Diagnostics → Send diagnostic report. Reports mask your locations by default, and you see the contents before sending.


## Contact

**Paragraph 1**
Support: support@hybridedge.com.au Privacy: privacy@hybridedge.com.au Facebook: HybridEdge

**Paragraph 2**
Privacy policy · Terms of use · FAQ


# ═══ Privacy page ═══

**Title**
Privacy Policy

**Updated line**
HybridEdge for iOS · Effective 19 September 2026

**Summary box**
The short version: HybridEdge has no accounts, no analytics, no ads, and no tracking. Your driving history lives on your phone, and in your own iCloud only if you set up household sync. On its own the app only downloads public reference data (vehicle specifications and Australian electricity plans, containing nothing about you). Three things can go the other way, all your choice: household sync, into your own iCloud, only if you set it up; anonymous calibration data, which is presented as a clear choice during setup, is on unless you decline, and can be switched off anytime; and a diagnostic report, only ever when you choose to send one.


## No account, no sign-up

**Paragraph 1**
HybridEdge does not ask you to create an account or provide any personal details. We have no user database, and because of this there will never be any scraping or selling your data. We can't because we don't collect anything.


## What the app records, and where it lives

**Paragraph 1**
Trips, fuel and charging events, costs, vehicle telemetry read from your OBD adapter, and trip locations are stored on your device, in the app's local database. Nothing leaves your phone unless you choose it: there is no account and no developer server holding a copy of your driving. Deleting the app deletes everything on the phone; we hold no copy to ask us to remove (or restore), because none exists.

**Paragraph 2**
You can choose to share three things, each described in full below: household sync, calibration data, and a diagnostic report.


## Household sync (your choice, off until you set it up)

**Paragraph 1**
If you turn on household sync, your vehicle's trips, costs, and charging events are copied into your own iCloud and shared with the phones you invite, using Apple's iCloud sharing. This is the one feature that keeps a copy of your driving outside the phone, and it lives in your iCloud account under Apple's terms, not on any server of ours. We never see this data and cannot access it. Switching household sync off on a phone stops that phone syncing and deletes nothing.

**Paragraph 2**
To delete the copy, tap Delete household data on the Household sync card, in Settings under Data & Backups. On the phone that set up the household, it deletes the shared copy from iCloud for every phone. On any other phone, it deletes that phone's copy and leaves the household. Trips already on each phone stay on that phone. You can also remove the copy through your iCloud storage settings.


## Location

**Paragraph 1**
If you grant location permission, the app records trip start and end locations and place names to label your logbook. This data stays on your device like everything else. Location permission is optional; the app works without it.


## Bluetooth and your car

**Paragraph 1**
The app connects to your OBD-II Bluetooth reader and asks your car the same standard read-only questions a mechanic's scan tool asks: battery level and power, fuel level, speed, odometer. It cannot change vehicle settings, clear fault codes, or modify your car in any way. Vehicle data is processed and stored on your phone; the one exception is the calibration sharing described below, if you have it on.


## Reference data the app downloads

**Paragraph 1**
The app periodically downloads two public reference files from our public repository: its vehicle-specification database (battery sizes, tank capacities, and similar published figures for PHEV models) and its list of Australian electricity plans and their rates, so new vehicles and tariffs appear without an app update. These requests carry no personal information, no identifiers, and no usage data; they are plain file downloads.


## Calibration sharing (your choice, on unless you decline)

**Paragraph 1**
When HybridEdge learns how a vehicle model reports its data, the result can be shared so the app becomes accurate for other owners of the same model. During setup the app asks you directly, with sharing preselected; you can decline with one tap there, or switch it off later in Settings under Diagnostics. If sharing is on, the app submits small anonymous records via Apple's CloudKit service: while your model is still being calibrated, each calibration reading (the raw value from the car, the dash reading you typed, the channel, and your vehicle model); on cars that report their battery's power, two numbers from each charge the app watches (the energy the battery took in, and what the car's power reading added up to over the same time); and, when your car finishes learning a reading, the line it worked out. When two or more cars of one model agree on the charge figure, it is published in the vehicle database the app downloads, so other owners of that model get measured regen straight away, until their own car's figure replaces it.

**Paragraph 2**
None of these contains trips, locations, the support code from diagnostic reports, or anything that identifies you. Like anything saved through iCloud, each one arrives with the time it was saved and an anonymous identifier Apple assigns to your iCloud account for this app only; it says nothing about who you are, and we use it only to count how many different cars agree. Readings are used only to build your model's calibration and are deleted once that calibration is published. Sharing stops by itself once your model is calibrated, and your car keeps calibrating on your phone whether you share or not.


## Diagnostic reports (only when you send them)

**Paragraph 1**
If something looks wrong, you can choose to send a diagnostic report with Upload report, in Settings under Diagnostics. Nothing is ever sent automatically. Before a report leaves your phone, coordinates are rounded to roughly one kilometre and place names are removed. During the beta, reports also carry a random support code so reports from the same install can be grouped when you ask for help; the code is generated on your phone, is linked to nothing else, and never travels with calibration data.

**Paragraph 2**
Upload report transmits the report directly to the developer through Apple's iCloud service, along with your device model, iOS version, app version, and vehicle model. Uploaded reports can be read only by the developer, and are deleted once the issue they describe is resolved.


## Beta testing via TestFlight

**Paragraph 1**
If you use HybridEdge through Apple's TestFlight, Apple may provide us with crash logs and feedback you submit, handled under Apple's privacy terms. These contain diagnostic information, not your driving history.


## Children

**Paragraph 1**
HybridEdge is a vehicle-cost tool and is not directed at children.


## Changes

**Paragraph 1**
If this policy ever changes, for example if a future optional feature involves a new kind of network request, the change will be described here with a new effective date, and the in-app description will match. (19 September 2026: calibration sharing now includes two numbers from each charge the app watches, on cars that report their battery's power, and this page now says how different cars are counted; household sync can be deleted from the app; the diagnostic report section now matches the app, with one Upload report button, locations always rounded, and no display name. 31 August 2026: household sync section added. 18 August 2026: calibration sharing described in full: readings while a model is being calibrated, fitted numbers on completion, deletion once published. 27 July 2026: added the optional calibration-sharing section above, exactly per this clause. 6 August 2026: calibration sharing changed from off by default to preselected during setup. What is shared did not change; only the default did.)


## Contact

**Paragraph 1**
Questions about privacy: privacy@hybridedge.com.au


# ═══ Terms page ═══

**Title**
Terms of Use

**Updated line**
HybridEdge for iOS and hybridedge.com.au · Effective 21 July 2026

**Summary box**
The short version: HybridEdge is an information tool. Don't touch it while driving. Its figures are measurements and estimates to help you understand your car's running costs, not professional advice, and not guaranteed. You use the app, your OBD reader, and this website at your own risk, and nothing here takes away rights the Australian Consumer Law says you keep.


## 1. Agreement

**Paragraph 1**
By downloading or using the HybridEdge app, or using this website, you agree to these terms. If you get the app through Apple's App Store or TestFlight, Apple's own terms also apply to the download and distribution. If you don't agree with these terms, don't use the app.


## 2. What HybridEdge is

**Paragraph 1**
HybridEdge is an information and record-keeping tool for plug-in hybrid vehicle running costs. It reads data from your vehicle (via an OBD-II adapter you supply) and from figures you enter, and presents measurements, calculations, and estimates based on them. It does not control your vehicle and it is not a substitute for your vehicle's own instruments, your owner's manual, or professional advice.


## 3. Road safety comes first

**Paragraph 1**
Do not interact with HybridEdge while driving. Set up trip logging before you set off, and review your figures after you park. You are solely responsible for driving safely and for complying with all road laws, including laws about mobile phone use in vehicles. If a feature ever seems to invite attention while the car is moving, park first.


## 4. Accuracy of figures

**Paragraph 1**
We work hard to make HybridEdge's numbers accurate, and the app is built to show measured data wherever it can. Even so, every figure the app shows (costs, energy use, efficiency, savings, CO₂ estimates, and comparisons) depends on your vehicle's reported data, your hardware, and the prices and settings you enter. Figures are provided for general information only. They may be wrong, incomplete, or out of date, and they are not financial, taxation, or professional advice. Check any figure against your own records before relying on it for a decision that matters: a tax claim, a vehicle purchase, or a warranty dispute.


## 5. Your vehicle and OBD hardware

**Paragraph 1**
OBD-II readers are third-party hardware made and sold by others; we don't manufacture, supply, or warrant them. HybridEdge asks your vehicle standard read-only questions of the kind a mechanic's scan tool asks; it does not write to, configure, or modify your vehicle. However, you connect hardware to your vehicle's diagnostic port at your own risk, and you are responsible for checking whether using an OBD accessory affects your vehicle's warranty or insurance. If in doubt, ask your dealer before plugging anything in.


## 6. Beta and pre-release versions

**Paragraph 1**
Versions of HybridEdge distributed through TestFlight are pre-release software. They may contain defects, may lose data, and may change or stop working without notice. Use beta builds with that in mind.


## 7. No warranties

**Paragraph 1**
To the maximum extent permitted by law, HybridEdge and this website are provided "as is" and "as available", without warranties of any kind, express or implied, including warranties of accuracy, fitness for a particular purpose, or uninterrupted operation. Section 10 explains the rights this does not affect.


## 8. Limitation of liability

**Paragraph 1**
To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential loss or damage (including loss of data, loss of savings you expected to make, vehicle damage, fines, or costs arising from decisions made in reliance on the app's figures) arising out of or in connection with your use of the app or website. To the maximum extent permitted by law, our total aggregate liability is limited to the amount you paid for the app in the twelve months before the claim arose.


## 9. Your responsibilities

**Paragraph 1**
You agree to use the app lawfully and as intended, and you are responsible for what you do with it and while using it. To the extent permitted by law, you agree to indemnify us against claims by third parties arising from your unlawful use of the app or your breach of these terms, for example a claim arising from unsafe device use while driving.


## 10. Australian Consumer Law

**Paragraph 1**
Nothing in these terms excludes, restricts, or modifies any consumer guarantee, right or remedy under the Australian Consumer Law or any other law that cannot lawfully be excluded. Where our liability under such a non-excludable provision can lawfully be limited, it is limited, at our option, to resupplying the app or paying the cost of having it resupplied.


## 11. Intellectual property

**Paragraph 1**
The app, its design, and the content of this website belong to the developer. The vehicle-specification database describes publicly available figures. You may not copy, resell, or redistribute the app.


## 12. Changes

**Paragraph 1**
These terms may change as the app grows, for example when new features ship. Changes will be posted here with a new effective date, and continuing to use the app after a change means you accept the updated terms.


## 13. Governing law

**Paragraph 1**
These terms are governed by the laws of New South Wales, Australia, and you submit to the non-exclusive jurisdiction of its courts.


## Contact

**Paragraph 1**
Questions about these terms: support@hybridedge.com.au
