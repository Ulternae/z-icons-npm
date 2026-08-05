import React from 'react';

export interface LanHyphenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHyphen(props: LanHyphenProps): React.ReactElement;
export default LanHyphen;
