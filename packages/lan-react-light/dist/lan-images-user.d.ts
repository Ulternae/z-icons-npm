import React from 'react';

export interface LanImagesUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesUser(props: LanImagesUserProps): React.ReactElement;
export default LanImagesUser;
