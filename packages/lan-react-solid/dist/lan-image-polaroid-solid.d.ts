import React from 'react';

export interface LanImagePolaroidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidSolid(props: LanImagePolaroidSolidProps): React.ReactElement;
export default LanImagePolaroidSolid;
