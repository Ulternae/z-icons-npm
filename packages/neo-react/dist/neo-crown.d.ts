import React from 'react';

export interface NeoCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCrown(props: NeoCrownProps): React.ReactElement;
export default NeoCrown;
