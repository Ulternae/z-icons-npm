import React from 'react';

export interface LanDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDatabase(props: LanDatabaseProps): React.ReactElement;
export default LanDatabase;
