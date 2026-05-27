import React from 'react';

export interface NeoUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUsers: React.FC<NeoUsersProps>;
export default NeoUsers;
