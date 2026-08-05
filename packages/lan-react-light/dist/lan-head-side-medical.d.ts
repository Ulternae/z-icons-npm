import React from 'react';

export interface LanHeadSideMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideMedical(props: LanHeadSideMedicalProps): React.ReactElement;
export default LanHeadSideMedical;
