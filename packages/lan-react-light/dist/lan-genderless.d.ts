import React from 'react';

export interface LanGenderlessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGenderless(props: LanGenderlessProps): React.ReactElement;
export default LanGenderless;
