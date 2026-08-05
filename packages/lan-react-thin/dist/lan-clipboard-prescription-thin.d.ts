import React from 'react';

export interface LanClipboardPrescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardPrescriptionThin(props: LanClipboardPrescriptionThinProps): React.ReactElement;
export default LanClipboardPrescriptionThin;
