import React from 'react';

export interface MinaUmbrellaOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUmbrellaOff(props: MinaUmbrellaOffProps): React.ReactElement;
export default MinaUmbrellaOff;
