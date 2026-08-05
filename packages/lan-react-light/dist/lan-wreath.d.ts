import React from 'react';

export interface LanWreathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreath(props: LanWreathProps): React.ReactElement;
export default LanWreath;
