import React from 'react';

export interface LanWhistleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhistleRegular(props: LanWhistleRegularProps): React.ReactElement;
export default LanWhistleRegular;
