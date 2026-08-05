import React from 'react';

export interface LanHeaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeader(props: LanHeaderProps): React.ReactElement;
export default LanHeader;
