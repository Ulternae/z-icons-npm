import React from 'react';

export interface LanMessageCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageCode(props: LanMessageCodeProps): React.ReactElement;
export default LanMessageCode;
