import React from 'react';

export interface LanPersonArmsRaisedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonArmsRaised(props: LanPersonArmsRaisedProps): React.ReactElement;
export default LanPersonArmsRaised;
