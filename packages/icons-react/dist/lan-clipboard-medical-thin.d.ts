import React from 'react';

export interface LanClipboardMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardMedicalThin: React.FC<LanClipboardMedicalThinProps>;
export default LanClipboardMedicalThin;
