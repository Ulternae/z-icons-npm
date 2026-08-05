import React from 'react';

export interface NeoBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBold(props: NeoBoldProps): React.ReactElement;
export default NeoBold;
