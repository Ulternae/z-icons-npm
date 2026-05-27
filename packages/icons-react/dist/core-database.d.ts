import React from 'react';

export interface CoreDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDatabase: React.FC<CoreDatabaseProps>;
export default CoreDatabase;
