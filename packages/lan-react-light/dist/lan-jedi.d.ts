import React from 'react';

export interface LanJediProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJedi(props: LanJediProps): React.ReactElement;
export default LanJedi;
