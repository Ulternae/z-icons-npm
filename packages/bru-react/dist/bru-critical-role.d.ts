import React from 'react';

export interface BruCriticalRoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCriticalRole(props: BruCriticalRoleProps): React.ReactElement;
export default BruCriticalRole;
