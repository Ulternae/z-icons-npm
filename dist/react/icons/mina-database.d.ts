import React from 'react';

export interface MinaDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDatabase: React.FC<MinaDatabaseProps>;
export default MinaDatabase;
