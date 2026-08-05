import React from 'react';

export interface LanClipboardMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardMedicalSolid(props: LanClipboardMedicalSolidProps): React.ReactElement;
export default LanClipboardMedicalSolid;
