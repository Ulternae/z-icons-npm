import React from 'react';

export interface LanClipboardMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardMedical: React.FC<LanClipboardMedicalProps>;
export default LanClipboardMedical;
