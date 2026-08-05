import React from 'react';

export interface LanCommentMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMedicalSolid(props: LanCommentMedicalSolidProps): React.ReactElement;
export default LanCommentMedicalSolid;
