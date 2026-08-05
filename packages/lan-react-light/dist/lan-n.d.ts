import React from 'react';

export interface LanNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanN(props: LanNProps): React.ReactElement;
export default LanN;
