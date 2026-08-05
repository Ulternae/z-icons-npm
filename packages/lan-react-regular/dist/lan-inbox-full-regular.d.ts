import React from 'react';

export interface LanInboxFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxFullRegular(props: LanInboxFullRegularProps): React.ReactElement;
export default LanInboxFullRegular;
