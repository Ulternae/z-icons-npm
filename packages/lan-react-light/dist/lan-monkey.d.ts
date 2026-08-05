import React from 'react';

export interface LanMonkeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonkey(props: LanMonkeyProps): React.ReactElement;
export default LanMonkey;
