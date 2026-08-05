import React from 'react';

export interface LanClipboardMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardMedical(props: LanClipboardMedicalProps): React.ReactElement;
export default LanClipboardMedical;
