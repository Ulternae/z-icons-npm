import React from 'react';

export interface LanShuttlecockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttlecockRegular(props: LanShuttlecockRegularProps): React.ReactElement;
export default LanShuttlecockRegular;
