import React from 'react';

export interface LanDownUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownUp(props: LanDownUpProps): React.ReactElement;
export default LanDownUp;
