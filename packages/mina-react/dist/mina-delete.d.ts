import React from 'react';

export interface MinaDeleteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDelete(props: MinaDeleteProps): React.ReactElement;
export default MinaDelete;
