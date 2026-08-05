import React from 'react';

export interface LanImagePolaroidUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidUserSolid(props: LanImagePolaroidUserSolidProps): React.ReactElement;
export default LanImagePolaroidUserSolid;
