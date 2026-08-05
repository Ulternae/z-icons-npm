import React from 'react';

export interface LanImagesUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesUserSolid(props: LanImagesUserSolidProps): React.ReactElement;
export default LanImagesUserSolid;
