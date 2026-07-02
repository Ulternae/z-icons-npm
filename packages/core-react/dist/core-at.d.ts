import React from 'react';

export interface CoreAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAt(props: CoreAtProps): React.ReactElement;
export default CoreAt;
