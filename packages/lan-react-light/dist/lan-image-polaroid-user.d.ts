import React from 'react';

export interface LanImagePolaroidUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidUser(props: LanImagePolaroidUserProps): React.ReactElement;
export default LanImagePolaroidUser;
