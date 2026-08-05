import React from 'react';

export interface MinaActivityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaActivity(props: MinaActivityProps): React.ReactElement;
export default MinaActivity;
