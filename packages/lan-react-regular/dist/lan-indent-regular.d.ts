import React from 'react';

export interface LanIndentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndentRegular(props: LanIndentRegularProps): React.ReactElement;
export default LanIndentRegular;
