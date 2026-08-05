import React from 'react';

export interface LanClipboardPrescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardPrescription(props: LanClipboardPrescriptionProps): React.ReactElement;
export default LanClipboardPrescription;
