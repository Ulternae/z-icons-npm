import React from 'react';

export interface LanClipboardMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardMedicalThin(props: LanClipboardMedicalThinProps): React.ReactElement;
export default LanClipboardMedicalThin;
