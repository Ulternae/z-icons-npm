import React from 'react';

export interface LanStethoscopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStethoscopeRegular(props: LanStethoscopeRegularProps): React.ReactElement;
export default LanStethoscopeRegular;
