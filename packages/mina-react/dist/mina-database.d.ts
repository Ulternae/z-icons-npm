import React from 'react';

export interface MinaDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDatabase(props: MinaDatabaseProps): React.ReactElement;
export default MinaDatabase;
