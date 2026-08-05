import React from 'react';

export interface MinaUmbrellaOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUmbrellaOffSolid(props: MinaUmbrellaOffSolidProps): React.ReactElement;
export default MinaUmbrellaOffSolid;
