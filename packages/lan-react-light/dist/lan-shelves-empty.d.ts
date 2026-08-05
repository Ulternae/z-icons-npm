import React from 'react';

export interface LanShelvesEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelvesEmpty(props: LanShelvesEmptyProps): React.ReactElement;
export default LanShelvesEmpty;
