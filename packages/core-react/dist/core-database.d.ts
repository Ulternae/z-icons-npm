import React from 'react';

export interface CoreDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDatabase(props: CoreDatabaseProps): React.ReactElement;
export default CoreDatabase;
