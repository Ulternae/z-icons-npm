import React from 'react';

export interface LanHandPointUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointUp(props: LanHandPointUpProps): React.ReactElement;
export default LanHandPointUp;
