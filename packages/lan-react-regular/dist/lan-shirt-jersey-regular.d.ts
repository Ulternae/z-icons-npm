import React from 'react';

export interface LanShirtJerseyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtJerseyRegular(props: LanShirtJerseyRegularProps): React.ReactElement;
export default LanShirtJerseyRegular;
