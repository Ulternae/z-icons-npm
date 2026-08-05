import React from 'react';

export interface CorePawRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePawRegularDuo(props: CorePawRegularDuoProps): React.ReactElement;
export default CorePawRegularDuo;
