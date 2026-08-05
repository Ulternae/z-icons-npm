import React from 'react';

export interface LanFileAiffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAiff(props: LanFileAiffProps): React.ReactElement;
export default LanFileAiff;
