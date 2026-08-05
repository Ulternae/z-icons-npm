import React from 'react';

export interface LanAngleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleUp(props: LanAngleUpProps): React.ReactElement;
export default LanAngleUp;
