import React from 'react';

export interface LanClipboardPrescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardPrescriptionSolid(props: LanClipboardPrescriptionSolidProps): React.ReactElement;
export default LanClipboardPrescriptionSolid;
