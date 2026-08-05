import React from 'react';

export interface LanOutletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOutlet(props: LanOutletProps): React.ReactElement;
export default LanOutlet;
