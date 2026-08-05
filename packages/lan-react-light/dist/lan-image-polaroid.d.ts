import React from 'react';

export interface LanImagePolaroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroid(props: LanImagePolaroidProps): React.ReactElement;
export default LanImagePolaroid;
